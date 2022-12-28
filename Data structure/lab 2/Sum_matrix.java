import java.util.Scanner;
public class Sum_matrix
{
	static Scanner input=new Scanner(System.in);
	static int[][] matrix1=new int[2][2];
	static int[][] matrix2=new int[2][2];
	static int[][] sum_matrix=new int[2][2];
	public  static void readMatrix()
	{
		System.out.println("input data for matrix 1");
		for (int i=0;i<2 ;i++ ) {
			for (int j=0;j<2 ;j++ ) {
				System.out.println("matrix1 :["+i+"]["+j+"]");
				matrix1[i][j]=input.nextInt();
			}
		}
		System.out.println("input data for matrix 2");
		for (int i=0;i<2 ;i++ ) {
			for (int j=0;j<2 ;j++ ) {
				System.out.println("matrix2 :["+i+"]["+j+"]");
				matrix2[i][j]=input.nextInt();
			}
		}
	}
	public static void sum_of_matrix()
	{
		for (int i=0;i<2 ;i++ ) {
			for (int j=0;j<2 ;j++ ) {
				
				sum_matrix[i][j]=matrix1[i][j]+matrix2[i][j];
			}
	
		}
	}
	public static void print_matrix()
	{
		System.out.println("Sum of matrix");
		try{
			for (int i=0;i<2 ;i++ ) {
		 		for (int j=0;j<2 ;j++ ) {
					System.out.print(sum_matrix[i][j]+"\t");		
				}
				System.out.println("\n");			
			}
		}
		catch(Exception e){}
		
	}
	public static void main(String[] args)throws Exception
	{
		readMatrix();
		sum_of_matrix();
		print_matrix();
	}
}