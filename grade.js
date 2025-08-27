
let fullname = "Nurul shaikh" ,
    id = 8133 ,
    module_1 = 87,
    module_2 = 96,
    module_3 = 79,
    module_4 = 63;


 
   let totalMarks = module_1 + module_2 + module_3 + module_4 ;


   console.log("---------------------------------");
   console.log("Student ID : " , id);
   console.log("Student Name : " , fullname);

   console.log("Module 1 marks : " , module_1);
   console.log("Module 2 marks : " , module_2);
   console.log("Module 3 marks : " , module_3);
   console.log("Module 4 marks : " , module_4);
   console.log(`Total marks : ${totalMarks} from 400`)


   
   let percentage = totalMarks / 400 * 100;
   
   console.log(`Percentage : ${percentage}% `);
   
   
   let grade;
   
   if(percentage >= 95){
      grade = "A+";
   }
   else if(percentage >= 90){
      grade = "A";
   }
   else if(percentage >= 80){
      grade = "B";
   }
   else if(percentage >= 60){
      grade = "C";
   }
   else{
      console.log("You failed this exam!!");
   }
   
   console.log(`You got ${grade} in your exam`);
   
   console.log("---------------------------------");