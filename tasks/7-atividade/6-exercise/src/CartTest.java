import java.math.BigDecimal;

public class CartTest {

    public static void main(String[] args) {
        System.out.println("TESTES DO SISTEMA DE CARRINHO DE COMPRAS\n");

        try {
            testMoneyValueObject();
            testProductCreation();
            testBasicCartFunctionality();
            testCartWithDiscountCoupons();
            testValidation();
            testImmutability();
            
            System.out.println("\n✅ TODOS OS TESTES EXECUTADOS COM SUCESSO! ✅");
        } catch (Exception e) {
            System.err.println("❌ ERRO NOS TESTES: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private static void testMoneyValueObject() {
        System.out.println("1. TESTE - Objeto de Valor Dinheiro");
        System.out.println("-".repeat(40));

        // Criação de objetos Dinheiro
        Money dinheiro1 = new Money("100.50", Currency.BRL);
        Money dinheiro2 = new Money("50.25", Currency.BRL);
        Money dinheiro3 = new Money("100.50", Currency.BRL);

        System.out.println("Dinheiro 1: " + dinheiro1);
        System.out.println("Dinheiro 2: " + dinheiro2);
        System.out.println("Dinheiro 3: " + dinheiro3);

        // Teste de equals/hashCode
        System.out.println("dinheiro1.equals(dinheiro3): " + dinheiro1.equals(dinheiro3));
        System.out.println("dinheiro1.hashCode() == dinheiro3.hashCode(): " + 
                         (dinheiro1.hashCode() == dinheiro3.hashCode()));

        // Operações monetárias
        Money soma = dinheiro1.somar(dinheiro2);
        Money subtracao = dinheiro1.subtrair(dinheiro2);
        Money multiplicacao = dinheiro1.multiplicar(2);
        Money desconto = dinheiro1.applyDiscount(new BigDecimal("10"));

        System.out.println("Soma: " + soma);
        System.out.println("Subtração: " + subtracao);
        System.out.println("Multiplicação por 2: " + multiplicacao);
        System.out.println("Desconto de 10%: " + desconto);
        System.out.println();
    }

    private static void testProductCreation() {
        System.out.println("2. TESTE - Produtos");
        System.out.println("-".repeat(40));

        Produto notebook = new Produto("001", "Notebook Dell", 
                                     "Notebook Dell Inspiron 15", 
                                     new Money("2500.00", Currency.BRL));
        
        Produto mouse = new Produto("002", "Mouse Logitech", 
                                  "Mouse sem fio Logitech", 
                                  new Money("89.90", Currency.BRL));

        System.out.println("Produto 1: " + notebook);
        System.out.println("Produto 2: " + mouse);
        System.out.println();
    }

    private static void testBasicCartFunctionality() {
        System.out.println("3. TESTE - Carrinho Básico");
        System.out.println("-".repeat(40));

        // Criação de produtos
        Produto notebook = new Produto("001", "Notebook Dell", 
                                     "Notebook Dell Inspiron 15", 
                                     new Money("2500.00", Currency.BRL));
        
        Produto mouse = new Produto("002", "Mouse Logitech", 
                                  "Mouse sem fio Logitech", 
                                  new Money("89.90", Currency.BRL));

        Produto teclado = new Produto("003", "Teclado Mecânico", 
                                    "Teclado mecânico RGB", 
                                    new Money("299.99", Currency.BRL));

        // Carrinho vazio
        ShoppingCart carrinho = new ShoppingCart();
        System.out.println("Carrinho vazio: " + carrinho.isEmpty());
        System.out.println("Subtotal inicial: " + carrinho.getSubtotal());

        // Adicionando produtos
        carrinho = carrinho.appendProduct(notebook, 1);
        carrinho = carrinho.appendProduct(mouse, 2);
        carrinho = carrinho.appendProduct(teclado, 1);

        System.out.println("\nApós adicionar produtos:");
        System.out.println("Quantidade de itens: " + carrinho.getQuantityItems());
        System.out.println("Subtotal: " + carrinho.getSubtotal());
        System.out.println("Total: " + carrinho.getTotal());

        // Alterando quantidade
        carrinho = carrinho.alterarQuantidadeProduto(mouse, 3);
        System.out.println("\nApós alterar quantidade do mouse para 3:");
        System.out.println("Subtotal: " + carrinho.getSubtotal());

        // Removendo produto
        carrinho = carrinho.removerProduto(teclado);
        System.out.println("\nApós remover teclado:");
        System.out.println("Quantidade de itens: " + carrinho.getQuantityItems());
        System.out.println("Subtotal: " + carrinho.getSubtotal());
        System.out.println();
    }

    private static void testCartWithDiscountCoupons() {
        System.out.println("4. TESTE - Carrinho com Cupons");
        System.out.println("-".repeat(40));

        Produto notebook = new Produto("001", "Notebook Dell", 
                                     "Notebook Dell Inspiron 15", 
                                     new Money("2000.00", Currency.BRL));

        // Criando cupons
        Cupom cupom10 = new Cupom("DESCONTO10", 10.0, "Desconto de 10%");
        Cupom cupom25 = new Cupom("DESCONTO25", 25.0, "Desconto de 25%");
        Cupom cupom30 = new Cupom("DESCONTO30", 30.0, "Desconto máximo de 30%");

        System.out.println("Cupom 1: " + cupom10);
        System.out.println("Cupom 2: " + cupom25);
        System.out.println("Cupom 3: " + cupom30);

        ShoppingCart carrinho = new ShoppingCart();
        carrinho = carrinho.appendProduct(notebook, 1);

        System.out.println("\nCarrinho sem cupom:");
        System.out.println("Subtotal: " + carrinho.getSubtotal());
        System.out.println("Desconto: " + carrinho.getDiscountValue());
        System.out.println("Total: " + carrinho.getTotal());

        // Aplicando cupom de 10%
        carrinho = carrinho.applyCoupon(cupom10);
        System.out.println("\nCom cupom de 10%:");
        System.out.println("Subtotal: " + carrinho.getSubtotal());
        System.out.println("Desconto: " + carrinho.getDiscountValue());
        System.out.println("Total: " + carrinho.getTotal());

        // Aplicando cupom de 25%
        carrinho = carrinho.applyCoupon(cupom25);
        System.out.println("\nCom cupom de 25%:");
        System.out.println("Subtotal: " + carrinho.getSubtotal());
        System.out.println("Desconto: " + carrinho.getDiscountValue());
        System.out.println("Total: " + carrinho.getTotal());

        // Aplicando cupom máximo de 30%
        carrinho = carrinho.applyCoupon(cupom30);
        System.out.println("\nCom cupom máximo de 30%:");
        System.out.println("Subtotal: " + carrinho.getSubtotal());
        System.out.println("Desconto: " + carrinho.getDiscountValue());
        System.out.println("Total: " + carrinho.getTotal());

        // Removendo cupom
        carrinho = carrinho.removeCoupon();
        System.out.println("\nApós remover cupom:");
        System.out.println("Total: " + carrinho.getTotal());
        System.out.println();
    }

    private static void testValidation() {
        System.out.println("5. TESTE - Validações");
        System.out.println("-".repeat(40));

        try {
            // Teste de valor negativo
            System.out.println("Testando valor negativo...");
            new Money("-10", Currency.BRL);
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Validação de valor negativo funcionou: " + e.getMessage());
        }

        try {
            // Teste de quantidade zero
            System.out.println("Testando quantidade zero...");
            Produto produto = new Produto("001", "Teste", "Teste", new Money("10", Currency.BRL));
            new ShoppingCartItem(produto, 0);
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Validação de quantidade zero funcionou: " + e.getMessage());
        }

        try {
            // Teste de cupom com desconto superior a 30%
            System.out.println("Testando cupom com desconto superior a 30%...");
            new Cupom("INVALIDO", 35.0, "Cupom inválido");
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Validação de cupom acima de 30% funcionou: " + e.getMessage());
        }

        try {
            // Teste de operação entre moedas diferentes
            System.out.println("Testando operação entre moedas diferentes...");
            Money real = new Money("100", Currency.BRL);
            Money dolar = new Money("100", Currency.USD);
            real.somar(dolar);
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Validação de moedas diferentes funcionou: " + e.getMessage());
        }

        System.out.println();
    }

    private static void testImmutability() {
        System.out.println("6. TESTE - Imutabilidade");
        System.out.println("-".repeat(40));

        Produto notebook = new Produto("001", "Notebook", "Descrição", 
                                     new Money("1000", Currency.BRL));
        
        // Carrinho original
        ShoppingCart carrinhoOriginal = new ShoppingCart();
        carrinhoOriginal = carrinhoOriginal.appendProduct(notebook, 1);

        System.out.println("Carrinho original - Total: " + carrinhoOriginal.getTotal());

        // Operações que retornam novos carrinhos
        ShoppingCart carrinhoComMaisItens = carrinhoOriginal.appendProduct(notebook, 1);
        ShoppingCart carrinhoComCupom = carrinhoOriginal.applyCoupon(
            new Cupom("DESC20", 20.0, "Desconto de 20%")
        );

        System.out.println("Carrinho com mais itens - Total: " + carrinhoComMaisItens.getTotal());
        System.out.println("Carrinho com cupom - Total: " + carrinhoComCupom.getTotal());
        System.out.println("Carrinho original (inalterado) - Total: " + carrinhoOriginal.getTotal());

        // Verificando que são objetos diferentes
        System.out.println("São objetos diferentes:");
        System.out.println("carrinhoOriginal == carrinhoComMaisItens: " + 
                         (carrinhoOriginal == carrinhoComMaisItens));
        System.out.println("carrinhoOriginal == carrinhoComCupom: " + 
                         (carrinhoOriginal == carrinhoComCupom));

        System.out.println();
    }
}
