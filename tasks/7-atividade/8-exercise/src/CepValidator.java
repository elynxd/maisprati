import java.util.regex.Pattern;

public class CepValidator {

    private static final Pattern PATTERN_CEP = Pattern.compile("\\d{5}-?\\d{3}");

    public static boolean isValido(String cep) {
        return cep != null && PATTERN_CEP.matcher(cep).matches();
    }

    public static void validar(String cep) {
        if (!isValido(cep)) {
            throw new CepInvalidoException(cep, "Formato deve ser XXXXX-XXX ou XXXXXXXX");
        }
    }

    public static String determinarRegiao(String cep) {
        validar(cep);

        // Remove hífen se existir
        String cepLimpo = cep.replace("-", "");
        int primeiroDiagito = Integer.parseInt(cepLimpo.substring(0, 1));

        switch (primeiroDiagito) {
            case 0:
                return "São Paulo - Grande SP";
            case 1:
                return "São Paulo - Interior";
            case 2:
                return "Rio de Janeiro e Espírito Santo";
            case 3:
                return "Minas Gerais";
            case 4:
                return "Bahia e Sergipe";
            case 5:
                return "Paraná e Santa Catarina";
            case 6:
                return "Pernambuco, Paraíba, Rio Grande do Norte, Alagoas";
            case 7:
                return "Ceará, Piauí, Maranhão";
            case 8:
                return "Distrito Federal, Goiás, Tocantins, Amazonas, Roraima, Acre, Rondônia";
            case 9:
                return "Mato Grosso, Mato Grosso do Sul, Rio Grande do Sul, Pará, Amapá";
            default:
                throw new CepInvalidoException(cep, "Região não identificada");
        }
    }
}
