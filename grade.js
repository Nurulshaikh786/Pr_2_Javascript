
let fullname = "Nurul" ,
    id = 8133 ,
    module_1 = 87,
    module_2 = 96,
    module_3 = 79,
    module_4 = 63;


 
   let totalMarks = module_1 + module_2 + module_3 + module_4 ;
   console.log(`You got ${totalMarks} from 400`)

   let percentage = totalMarks / 400 * 100;

   console.log(`You got ${percentage}% in exams`);
   

   let grade;

   if(percentage >= 90){
      grade = "A+";
   }
   else if(percentage >= 80){
      grade = "A";
   }
   else if(percentage >= 70){
      grade = "B";
   }
   else if(percentage >= 60){
      grade = "C";
   }
   else{
    console.log("You failed this exam!!");
   }

   console.log(`You got ${grade} in your exam`);
