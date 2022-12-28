import java.util.Scanner;
public class Factorial_recursion
{
	public int findFactorial(int n)
	{
		if(n==1)
		{
			return 1;
		}
		else
		{
			return (n*findFactorial(n-1));
		}			
	}
	public static void main(String[] args)
	{
		Scanner input=new Scanner(System.in);
		int result;
		System.out.println("Please enter number");
		int n=input.nextInt();		
		Factorial_recursion f1=new Factorial_recursion();
		result=f1.findFactorial(n);
		System.out.println("Factorial of nuber is"+ result);
	}
		
		
}