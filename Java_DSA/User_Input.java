import java.util.Scanner;

class user_input{
public static void main(String[] args) {

 System.out.println("Enter a number to print: ");
 Scanner In_user = new Scanner(System.in);
 System.out.println("enter No.1: ");
 int a = In_user.nextInt();
 System.out.println("enter No.2: ");
  int b = In_user.nextInt();
  int sum = a+b;
  In_user.close();
  System.out.println("The sum of Number is: "+ sum);
}
}