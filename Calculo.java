public class Calculo{
    public static int calculaDelta(int a, int b, int c){
        int delta;
        delta = b * b;
        delta = delta - 4 * a * c;
        return delta;           
    }

    public static void main(String[] args){
        System.out.println(Calculo.calculaDelta(1, 2, 3));
    }
}