import java.util.Scanner;
class Pattern1
{
	public static void main(String[] args){
		Scanner input=new Scanner(System.in);
		System.out.println("enter Number of raw");
		int n=input.nextInt();
		for (int i=0;i<n ;i++ ) {
			for(int j=0;j<n;j++){
				if (j<n-i-1) {
					System.out.print(" ");
				}

				else{
					System.out.print("*");
				}
			}
			System.out.print("\n");
		}
	}
}