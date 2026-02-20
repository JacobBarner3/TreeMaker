let root = Node(null, null, null, null);
let nodes = []

function addButtonInit(){

}

function initialize(){
    nodes += root;
    addButtonInit();
    print(nodes);
}

class Node {
    req2 = null;

    constructor(item, proccessor, rate, req1, req2){

        this.req1 = req1;
        this.req2 = req2 || this.req2;
        this.processor = proccessor;
        this.rate = rate;
        this.item = item;

    }
}

initialize();