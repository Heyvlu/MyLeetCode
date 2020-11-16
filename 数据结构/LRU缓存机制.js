var LRUCache = function(capacity) {
    this.cache=new Map();
    this.capacity=capacity;
};

LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        let value=this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,value);
        return value;
    }
    return -1;
};

LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.cache.delete(key);
        // 会把元素设置在最后面
        this.cache.set(key,value);
    }else{
        if(this.cache.size>=this.capacity){
            // 删除map的第一个元素
            this.cache.delete(this.cache.keys().next().value);
            this.cache.set(key,value);
        }else{
            this.cache.set(key,value);
        }
    }
};