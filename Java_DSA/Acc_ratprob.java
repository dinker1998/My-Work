public class Acc_ratprob {

    public static int minHousesForRats(int r, int unit, int[] arr) {
        if (arr == null) {
            return -1;
        }

        int totalFoodRequired = r * unit;
        int totalFoodAvailable = 0;
        int numHouses = 0;

        for (int food : arr) {
            totalFoodAvailable += food;
            if (totalFoodAvailable >= totalFoodRequired) {
                return ++numHouses;
            }
            numHouses++;
        }

        return 0;
    }

    public static void main(String[] args) {
        int r = 7;
        int unit = 2;
        int[] arr = {2, 7, 3, 5, 7, 4, 1, 2};
        System.out.println(minHousesForRats(r, unit, arr));
    }
}
