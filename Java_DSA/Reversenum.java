 public class Reversenum{
 public static int reverseNumber(int number) {
        int reversed = 0;

        while (number != 0) {
            int digit = number % 10;
            reversed = reversed * 10 + digit;
            number /= 10;
        }

        return reversed;
    }

    public static void main(String[] args) {
        int originalNumber = 78945;
        int reversedNumber = reverseNumber(originalNumber);
        System.out.println("Original: " + originalNumber);
        System.out.println("Reversed: " + reversedNumber);
    }
}