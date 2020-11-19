var equationsPossible = function(equations) {
    let uf=new UF(26);
    for (const eq of equations) {
        if(eq[1]=='='){
            let x=eq[0];
            let y=eq[3];
            uf.union(x.charCodeAt()-'a'.charCodeAt(),y.charCodeAt()-'a'.charCodeAt());
        }
    }
    for (const eq of equations) {
        if(eq[1]=='!'){
            let x=eq[0];
            let y=eq[3];
            if(uf.connected(x.charCodeAt()-'a'.charCodeAt(),y.charCodeAt()-'a'.charCodeAt())){
                return false;
            }
        }
    }
    return true;
};

class UF{
    constructor(n){
        this.count=n;
        this.parent=Array.from({length:n},()=>0);
        this.size=Array.from({length:n},()=>0);
        for(let i=0;i<n;i++){
            this.parent[i]=i;
            this.size[i]=1;
        }
    }
    union(p,q){
        let rootP=this.find(p);
        let rootQ=this.find(q);
        if(rootP==rootQ) return;
        if(this.size[rootP]<this.size[rootQ]){
            this.parent[rootP]=rootQ;
            this.size[rootQ]+=this.size[rootP];
        }else{
            this.parent[rootQ]=this.parent[rootP];
            this.size[rootP]+=this.size[rootQ];
        }
        this.count--;
    }
    find(x){
        while(this.parent[x]!=x){
            this.parent[x]=this.parent[this.parent[x]];
            x=this.parent[x];
        }
        return x;
    }
    connected(p,q){
        let rootP=this.find(p);
        let rootQ=this.find(q);
        return rootP==rootQ;
    }
}