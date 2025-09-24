import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class App {
    public static void main(String[] args) {

        List<PaymentMethods> availablePaymentMethods = new ArrayList<>();

        try {
            // 1. Cartão de Crédito válido
            CreditCard creditCard = new CreditCard(
                    "4111111111111111",
                    "João Silva",
                    "12/25",
                    "123");
            availablePaymentMethods.add(creditCard);

            // 2. Boleto válido
            PaymentSlip paymentSlip = new PaymentSlip(
                    "03399699999999999999999999999999999999999999",
                    LocalDate.now().plusDays(30),
                    "Empresa ABC Ltda",
                    "Maria Santos");
            availablePaymentMethods.add(paymentSlip);

            // 3. PIX com CPF
            Pix pixCpf = new Pix("12345678901", Pix.TipoChave.CPF, "Pagamento de serviços");
            availablePaymentMethods.add(pixCpf);

            // 4. PIX com email
            Pix pixEmail = new Pix("usuario@email.com", Pix.TipoChave.EMAIL, "Transferência");
            availablePaymentMethods.add(pixEmail);

        } catch (Exception e) {
            System.err.println("Erro ao criar formas de pagamento: " + e.getMessage());
        }

        BigDecimal valor = new BigDecimal("150.50");

        for (PaymentMethods paymentMethod : availablePaymentMethods) {
            executePaymentWithValidation(paymentMethod, valor);
            System.out.println("-".repeat(50));
        }

        System.out.println("\nTestando Validações e Exceções:\n");

        testPaymentValidation();
    }

    private static void executePaymentWithValidation(PaymentMethods paymentMethod, BigDecimal valor) {
        try {
            System.out.println("Processando: " + paymentMethod.getIdentificador());
            paymentMethod.processPayment(valor);

        } catch (InvalidPaymentException e) {
            System.err.println("❌ Erro de validação: " + e.getMessage());

        } catch (Exception e) {
            System.err.println("❌ Erro inesperado: " + e.getMessage());
        }

        System.out.println();
    }

    private static void testPaymentValidation() {
        System.out.println("1. Testando cartão com número inválido:");
        try {
            CreditCard invalidCreditCard = new CreditCard(
                    "1234567890123456", // Número que não passa no algoritmo
                    "Teste",
                    "12/25",
                    "123");
            invalidCreditCard.processPayment(new BigDecimal("100.00"));
        } catch (InvalidPaymentException e) {
            System.err.println("❌ " + e.getMessage());
        }

        System.out.println("\n2. Testando cartão vencido:");
        try {
            CreditCard expiredCard = new CreditCard(
                    "4111111111111111",
                    "Teste",
                    "01/20", // Vencido
                    "123");
            expiredCard.processPayment(new BigDecimal("100.00"));
        } catch (InvalidPaymentException e) {
            System.err.println("❌ " + e.getMessage());
        }

        System.out.println("\n3. Testando PIX com email inválido:");
        try {
            Pix pixInvalido = new Pix("email-invalido", Pix.TipoChave.EMAIL, "Teste");
            pixInvalido.processPayment(new BigDecimal("50.00"));
        } catch (InvalidPaymentException e) {
            System.err.println("❌ " + e.getMessage());
        }

        System.out.println("\n4. Testando valor inválido (negativo):");
        try {
            Pix pix = new Pix("teste@email.com", Pix.TipoChave.EMAIL, "Teste");
            pix.processPayment(new BigDecimal("-10.00"));
        } catch (InvalidPaymentException e) {
            System.err.println("❌ " + e.getMessage());
        }

        System.out.println("\n5. Testando boleto muito vencido:");
        try {
            PaymentSlip expiredPaymentSlip = new PaymentSlip(
                    "03399699999999999999999999999999999999999999",
                    LocalDate.now().minusDays(45), // Vencido há mais de 30 dias
                    "Empresa",
                    "Cliente");
            expiredPaymentSlip.processPayment(new BigDecimal("200.00"));
        } catch (InvalidPaymentException e) {
            System.err.println("❌ " + e.getMessage());
        }
    }
}
