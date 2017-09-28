import java.util.*;
import java.math.BigInteger;

public class LCM {

    private static long getGCD(long a, long b){
        if (b == 0) return a;

        return getGCD(b, a % b);
    }

    private static BigInteger getLCM(long a, long b){
        BigInteger m = BigInteger.valueOf(a);
        BigInteger n = BigInteger.valueOf(b);
        BigInteger gcd = BigInteger.valueOf(getGCD(a, b));
        return m.multiply(n).divide(gcd);
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long a = scanner.nextLong();
        long b = scanner.nextLong();

        BigInteger c = getLCM(a, b);
        System.out.println(c);
    }
}

