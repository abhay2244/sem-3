import java.util.Scanner;
class Circular_LinkedList{
		Node first;
		Node last;
		class Node{
			Object data;
			Node next;
			Node(Object data){
				this.data=data;
				this.next=null;
			}
			Node(){}
			
		}
	}
class Circular_LinkedList_Operation extends Circular_LinkedList{
	Node temp;
	Node pred;
	public void circular_Insert_First(Object x){
		Node new_Node=new Node(x);
		if (first==null) {
			new_Node.next=new_Node;
			first=last=new_Node;
		}
		else {
			new_Node.next=first;
			first=new_Node;
			last.next=new_Node;
		}
		return ;
	}
	public void display(){
		temp=first;
		if (first==null) {
			System.out.println("Linked list is empty");
			return ;
		}
		do{
			System.out.print(temp.data +"  ");
			temp=temp.next;
		}while(temp!=first);                      
		System.out.print("\n");
		return ;
	}
	public void circular_Insert_Last(Object x){
		Node new_Node=new Node(x);
		if (first==null) {
			new_Node.next=new_Node;
			first=last=new_Node;
		}
		else {
			new_Node.next=first;
			last.next=new_Node;
			last=new_Node;
		}
		return ;
	}
	public void circular_Delete(Object x){
		if (first==null) {
			System.out.println("Linklist is Empty");
			return ;
		}
		temp=first;
		while (temp.data!=x && temp!=last) {
			pred=temp;
			temp=temp.next;
		}
		if (temp.data!=x) {
			System.out.println("Node not Found");
			return ;
		}
		if (x==first.data) {
			first=first.next;
			last.next=first;
		}
		else {
			pred.next=temp.next;
			if (x==last.data) {
				last=pred;
			}
		}
		return ;
	}
}
public class Circular_Linked_ListDemo{
	public static void main(String[] args){
		Scanner input=new Scanner(System.in);
		Circular_LinkedList_Operation l1=new Circular_LinkedList_Operation();
		System.out.println("1.InsertBegning of Node\n2.Insert Last\n3.Delete\n4.Display\n5.Exit");
		int temp=input.nextInt();
		while(temp!=5){
			switch(temp){
				case 1:
					System.out.println("Enter value for Insert");
					l1.circular_Insert_First(input.nextInt());
					break;
				case 2:
					System.out.println("Enter value for Insert");
					l1.circular_Insert_Last(input.nextInt());
					break;
				case 3:
					System.out.println("Enter value for delete");
					l1.circular_Delete(input.nextInt());
					break;
				case 4:
					l1.display();
					break;
				default:
					System.out.println("Invalid choice");
				break;
			}
			System.out.println("1.InsertBegning of Node\n2.Insert Last\n3.Delete\n4.Display\n5.Exit");
			temp=input.nextInt();
		}
	}
}