class Vehicle{
    constructor(make,model,year)
    {
        this.make = make
        this.model = model
        this.year = year
    }
    display()
    {
        console.log("Make:",this.make)
        console.log("Model:",this.model)
        console.log("Year:", this.year)
    }
}

/*class Car extends Vehicle{
    constructor(make,model,year,doors){
        super(make,model,year)
        this.doors = doors
    }
    display()
    {
        super.display()
        console.log("Number of doors:",this.doors-)
    }
}
*/
class bankAccount{
    constructor(aNumber,balance)
    {
        this.aNumber = aNumber
        this.balance = balance
    }

    getBalance(){
        return this.balance
    }
    transfer(amount,)
    {
        if (amount <= this.balance)
        {
            acc += amount
            this.balance -= amount
        }
    }
    showBalance(){
        console.log(this.balance)
    }
}

class Shape{
    area(){
        console.log("The area is:")
    }
}

class Circle extends Shape{
    constructor(radius)
    {
        super()
        this.radius = radius
    }
    area(){
        console.log(Math.PI * (this.radius * this.radius))
    }
}

class Triangle extends Shape{
    constructor(base,height)
    {
        super()
        this.base = base
        this.height = height
    }
    area(){
        console.log(0.5 * (this.base * this.height))
    }
}

class Employee{
    constructor(name,salary)
    {
        this.name = name
        this.salary = salary

    }
    annual(){
        return salary * 12
    }
}

class Manager extends Employee
{
    constructor(name,salary,department)
    {
        super(name,salary)
        this.department = department

    }
    annual(bonus){
        return (this.salary * bonus) + this.salary
    }
}

class Book{
    constructor(title,author,pubYear)
    {
        this.title = title
        this.author = author
        this.pubYear = pubYear
    }
    display()
    {
        console.log("Title:", this.title)
        console.log("Author:", this.author)
        console.log("Publication year:", this.pubYear)

    }
}

class Ebook extends Book{
    constructor(title,author,pubYear,price)
    {
        super(title,author,pubYear)
        this.price = price
    }
    display()
    {
        console.log("Title:", this.title)
        console.log("Author:", this.author)
        console.log("Publication year:", this.pubYear)
        console.log("Price:",this.price)
    }
}

class Animal{
    constructor(species,sound)
    {
        this.species = species
        this.sound = sound
    }
    makeSound()
    {
        console.log(this.sound)
    }

}

class Dog extends Animal{
    constructor(species,sound,color)
    {
        super(species,sound)
        this.color = color
    }
    makeSound()
    {
        console.log("Sound:",this.sound)
        console.log("Color:",this.color)
    }
}

class Bank{
    constructor(bNames,bBranches = [])
    {
        this.bNames = bNames
        this.bBranches = bBranches
    }
    addBranch(branch)
    {
        if(!this.bBranches.includes(branch))
            this.bBranches.push(branch)
    }
    deleteBranch(branch)
    {
        if(this.bBranches.includes(branch))
        {
            const index = this.bBranches.indexOf(branch)
            if (index > -1)
            {
                this.bBranches.splice(index,1)
            }
        }
    }
    display()
    {
        console.log("Bank name:", this.bNames)
        console.log("Branch names:", this.bBranches)
    }
}

class Product{
    constructor(ID,name,price)
    {
        this.id = ID
        this.name = name
        this.price = price
    }
    totalPrice(quantity){
        return this.price * quantity
    }

}
class PersonalCareProduct extends Product{
    constructor(ID,name,price,wPeriod)
    {
        super(ID,name,price,)
        this.wPeriod = wPeriod
    }
    totalPrice(quantity)
    {
        const totalPrice = super.totalPrice(quantity)
        return totalPrice + this.wPeriod
    }
}

class BankAccount{
    constructor(accNumber,name,balance)
    {
        this.accNumber = accNumber
        this.name = name
        this.balance = balance
    }
    deposit(amount)
    {
        this.balance += amount
    }
    withdraw(amount)
    {
        if(amount <= this.balance)
        {
            this.balance -= amount
        }
    }
    transfer(amount,account)
    {
        if(amount <= this.balance)
        {
            this.balance -= amount
            account.deposit(amount)
        }
    }
    checkBalance()
    {
        console.log("Balance:" ,this.balance)
    }
}

class University{
    constructor(name,departments = [])
    {
        this.name = name
        this.departments = departments
    }

}