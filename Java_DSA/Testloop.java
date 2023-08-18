public class Testloop {
    public static int sour(int[] arr) {
        if(arr == null){
            return -1;
        }

        int tota = 0;

        for (int food : arr) {
            tota += food;
            
        }
        return tota++;
    }
     public static void main(String[] args) {
        
        int[] arr={}; 
        System.out.println(sour(arr));
     }
    }
