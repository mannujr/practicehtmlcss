// let name = 'manish'
// console.log(name);


// let dayname = '';
// let day=prompt('Enter the NUMBER');

// switch(parseInt(day))
// {
//     case 1:
//         dayname = 'sunday';
//         break;


//     case 2:
//         dayname = 'Monday';
//         break;


//     case 3:
//         dayname = 'Tuesday';
//         break;


//     case 4:
//        dayname = "Wednesay";
//         break;


//     case 5:
//         dayname = "Thursday";
//         break;


//     case 6:
//         dayname = "Friday";
//         break;

//     case 7:
//         dayname = "Friday";
//         break;
// }

// console.log(dayname);


// let day = parseInt(prompt("Number??"));

// if(day == 1)
// {
// console.log('Sunday');
// }
// else if (day == 2)
//     {
//     console.log('monday');
//     }
// else if (day == 3)
//     {
//     console.log('Tuesday');
//     }
// else if (day == 4)
//     {
//     console.log('Wednesday');
//     }
// else if (day == 5)
//     {
//     console.log('Thursday');
//     }
// else if (day == 6)
//     {
//     console.log('Friday');
//     }
// else if (day == 7)
//     {
//     console.log('Saturday');
//     }
//     else{
//     console.log('invalid input');
//     }



// for (let i = 0; i<=100;i++)
// {
//     console.log(i)
// }



// Winning Game

let Number = parseInt(prompt('Enter the Number'));
let trial = 3;
let Winningnum = 5;

// First Attempt
if (Number===Winningnum){
    console.log("Hurray!!! That's the right answer!!")
}
else
{   
    trial=trial-1;
    console.log("Wrong Answer! ${trial} left");

    // Second Attempt
    let Number = parseInt(prompt('Enter the Number'));
        if (Number===Winningnum){
            console.log("Hurray!!! That's the right answer!!")
        }
        else
        {
            trial=trial-1;
            console.log("Wrong Answer! ${trial} left");

            // Third Attempt
            let Number = parseInt(prompt('Enter the Number'));
            if (Number===Winningnum){
                console.log("Hurray!!! That's the right answer!!")
            }
            else
            {
                trial=trial-1;
                console.log("Wrong Answer! ${trial} left");
            }
        }
}