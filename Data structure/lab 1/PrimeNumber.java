import java.util.Scanner;
public class PrimeNumber
{
	public static void main(String[] args)
	{
		Scanner input=new Scanner(System.in);
		int flag=0;
		System.out.println("please enter number");
		int n=input.nextInt();
		for (int i=2;i<=n/2 ;i++ ) {
			if (n%i==0) {
				flag=1;
				break;
			}
		}
		if (flag==0) {
			System.out.println("number is prime");
		}
		else {
			System.out.println("number is not prime");
		}
	}
}