import java.util.Scanner;
public class Multiplication_matrix
{
	 Scanner input=new Scanner(System.in);
	 int[][] matrix1=new int[3][2];
	 int[][] matrix2=new int[2][3];
	 int[][] mul_matrix=new int[3][3];

	public void readMatrix()
	{
		System.out.println("input data for matrix 1");
		for (int i=0;i<3 ;i++ ) {
			for (int j=0;j<2 ;j++ ) {
				System.out.println("matrix1 :["+i+"]["+j+"]");
				matrix1[i][j]=input.nextInt();
			}
		}
		System.out.println("input data for matrix 2");
		for (int i=0;i<2 ;i++ ) {
			for (int j=0;j<3 ;j++ ) {
				System.out.println("matrix2 :["+i+"]["+j+"]");
				matrix2[i][j]=input.nextInt();
			}
		}
	}
	public void multiplication_of_matrix()
	{
		int x=0;
		int y=0;
		for (int i=0;i<3 ;i++ ) {
			for (int j=0;j<3 ;j++ ) {
				
				mul_matrix[i][j]=matrix1[i][x]*matrix2[y][j]+matrix1[i][y+1]*matrix2[y+1][j];	
			}
		
		}
	}
	public void print_matrix()
	{
		System.out.println("final matrix");
		for (int i=0;i<3 ;i++ ) {
			for (int j=0;j<3 ;j++ ) {
				System.out.print(mul_matrix[i][j]+"   ");
			}
			System.out.print("\n");
		}
	}
	public static void main(String[] args)
	{
		Multiplication_matrix m1 =new Multiplication_matrix();
		m1.readMatrix();
		m1.multiplication_of_matrix();
		m1.print_matrix();
	}
}