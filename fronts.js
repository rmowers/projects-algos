class SLLNode {
    constructor(val){
        this.value = val;
        this.node = null;
    }
}

class SLL {
    constructor(){
        this.head = null
    }
    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    removeFront(){
        if (this.head == null) { //avoids error from pointing next to null
            return this.head;
        }
        var removedNode = this.head; //temporary access to removed node
        this.head = removedNode.next; // moves the head to the next node
        removedNode.next = null; // points the .next pointed of the removed node to null
        return this.head; //returns new head
    }

    frontValue() {
        if (this.head == null) {
            return null;
        }
        else {
            return this.head.value;
        }
    }
}

var SLL1 = new SLL();
SLL1.addFront(5);
SLL1.addFront(15);
SLL1.addFront(16);

console.log (SLL1.frontValue());



