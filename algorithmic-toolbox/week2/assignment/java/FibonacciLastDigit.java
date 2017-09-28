import java.util.*;
import java.math.BigInteger;

public class FibonacciLastDigit {

    private static Long getFibonacciLastDigit(int n){
        List<Long> fib = new ArrayList<Long>();
        fib.add(0L);
        fib.add(1L);

        for(int i = 2; i <= n; i++){
            fib.add(fib.get(i-1) + fib.get(i-2));
        }
        System.out.println(fib);
        return fib.get(n) % 10;
    }

    private static int getFibonacciLastDigitBI(int n){
        List<BigInteger> fib = new ArrayList<BigInteger>();
        fib.add(BigInteger.ZERO);
        fib.add(BigInteger.ONE);

        for(int i = 2; i <= n; i++){
            fib.add(fib.get(i-1).add(fib.get(i-2)));
        }
        return fib.get(n).mod(BigInteger.TEN).intValue();
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int c = getFibonacciLastDigitBI(n);
        System.out.println(c);
    }
}

