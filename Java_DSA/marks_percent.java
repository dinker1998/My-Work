import java.util.Scanner;

public class marks_percent {
    public static void main(String[] args) {
        float total,score;
        float perc;
        System.out.println("Enter the Subject marks you got: ");
        Scanner Marks_got = new Scanner(System.in);
        score = Marks_got.nextFloat();
        System.out.println("Enter the total number of marks of one subject: ");
        Scanner Marks_total = new Scanner(System.in);
        total = Marks_total.nextFloat();
        perc = (score*100/total);

        System.out.println("the percentage is: "+perc+"%");
        Marks_got.close();
        Marks_total.close();
    }
}
