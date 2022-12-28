import java.util.Scanner;
class Stack_Operation_Using_LinkedList extends LinkedList{
	Node temp;
	Object popped;
	public void push(Object x){
		Node new_node=new Node(x);		
		if (head==null) {
			head=new_node;
		}
		else{
			temp=head;
			head=new_node;
			new_node.next=temp;
		}
	}
	public Object pop(){
		if (head==null) {
			System.out.println("Stack is empty");
			return 0;
		}
		else{
			popped=head.data;
			head=head.next;
			return popped;
		}
	}
	public Object peek(){
		if (head==null) {
			System.out.println("Stack empty");
			return 0;
		}
		return head.data;
	}
	public void display(){
		if (head==null) {
			System.out.println("Stack empty");
			return ;
		}
		temp=head;
		while(temp!=null){
			System.out.print(temp.data+"  ");
			temp=temp.next;
		}
		System.out.println();
		return ;
	}
}
public class Stack_Using_LinkedListDemo{
	public static void main(String[] args){
		Scanner input=new Scanner(System.in);
		Stack_Operation_Using_LinkedList s1=new Stack_Operation_Using_LinkedList();
		System.out.println("1.push\n2.pop\n3.peek\n4.Display\n5.Exit");
		int temp=input.nextInt();
		while(temp!=5){
			switch(temp){
				case 1:
					System.out.println("Enter Element for push");
					s1.push(input.nextInt());
					break;
				case 2:
					System.out.println("Pop element is :"+s1.pop());
					break;
				case 3:
					System.out.println("Top Element is :"+s1.peek());
					break;
				case 4:
					s1.display();
					break;
				default:
					System.out.println("Invalid choice");
				break;
			}
			System.out.println("1.push\n2.pop\n3.peek\n4.Display\n5.Exit");
			temp=input.nextInt();
		}
	}
}