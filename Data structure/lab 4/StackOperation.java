class StackOperation
{
	Object[] stack;
	int top=-1;
	int temp;
	void initializeStack(int n){
		stack=new Object[n];
	} 
	void push(Object x){
		if (top>=stack.length) {
			System.out.println("Stack Overflow");
			return ;
		}
		top++;
		stack[top]=x;
	}
	Object pop(){
		if(top<0) {
			System.out.println("Stack Underflow");
			return 0;
		}
		top--;
		return stack[top+1];
	}
	Object peep(int i) {
		if (top-i+1<0) {
			System.out.println("Stack Underflow");
			return 0;
		}
		return stack[top-i+1];
	}
	void change(int i,int x){
		if (top-i+1<0) {
			System.out.println("Stack Underflow");
			return ;
		}
		stack[top-i+1]=x;
		return ;
	}
	void display() {
		if (top<0) {
			System.out.println("Stack Underflow");
			return ;
		}
		temp=top;
		while(temp!=-1){
			System.out.println("Stack member of "+temp+" is "+stack[temp]);
			temp--;
		}
		return ;
	}
}