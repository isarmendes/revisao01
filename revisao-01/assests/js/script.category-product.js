// categoria possui vários produtos =>1 :n
class Category{
    constructor(id,name){
        this.id = id;
        this.name =name;
        this.products=[];
    }
}

// Produto pertence a uma categoria =>1:1
class Products{
    constructor(id,name,price,category){
        this.id= id;
        this.name = name;
        this.price = price;
        this.category =  category;
    }
}

class CategoryService {
    constructor(){
        this.categories =[];
        this.nextCategoryId = 0;
    }

    addCategory(name){
        const id = this.nextCategoryId ++; 
        const category = new Category(id, name);
        this.categorie.push(category);
    }
}

