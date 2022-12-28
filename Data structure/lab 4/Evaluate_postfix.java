import java.util.Scanner;
public class Evaluate_postfix{
	static StackOperation s1;
	static int value=0;
	static int nextCharCount=-1;
	static char temp;
	static int operand2;
	static int operand1;
	static String polish="546+*493/+*";
	static char getnextChar(){
		nextCharCount++;
		if(nextCharCount<polish.length()){
			return polish.charAt(nextCharCount);
		}else{
			return '\0';
		}	
	}
	static int calculateExpression(int operand1,int operand2,char temp){
		if (temp=='+') {
			return (operand1+operand2);
		}
		else if (temp=='-') {
			return (operand1-operand2);
		}
		else if (temp=='*') {
			return (operand1*operand2);
		}
		else if (temp=='/') {
			return (operand1/operand2);
		}
		else if (temp=='^') {
			return  (int)Math.pow(operand1, operand2);
		}
		else {
			System.out.println("Invalid Operation");
			return 0;
		}
	}
	public static void main(String[] args){
		s1=new StackOperation();
		s1.initializeStack(polish.length());
		temp=getnextChar(); 
		while(temp!='\0')
		{	
			if (Character.isDigit(temp)) {
				s1.push(Character.getNumericValue(temp));
			}
			else {
				operand2=(int)s1.pop();
				operand1=(int)s1.pop();
				value=calculateExpression(operand1,operand2,temp);
				s1.push(value);
			}
			temp=getnextChar();
		}
		System.out.println("value is"+s1.pop());
	}

}