function Randompara_generator(){
    let userRange= document.getElementById('range')
    userRange= +userRange.value
    let error = document.getElementById('error')
    let div = document.getElementById('result')
    let display= document.getElementById('output')
    let para = ["Mindfulness, rooted in Buddhist traditions, involves being present and non-judgmental. It reduces stress, improves emotional regulation, and boosts happiness. Techniques like deep breathing and meditation enhance relaxation and physical health. Simple daily practices and mindfulness apps promote a culture of presence, empathy, and resilience in today's fast-paced world.(End)","Mindfulness helps in managing stress by activating the body's relaxation response, countering the harmful effects of chronic stress. Regular practice can lower blood pressure and improve sleep quality, contributing to overall health.In addition to its mental health benefits, mindfulness has a positive impact on physical health. Regular mindfulness practice has been linked to lower blood pressure, improved sleep quality, and a stronger immune system. For example, mindful eating encourages individuals to pay attention to their hunger cues and savor each bite, leading to healthier eating habits and better digestion.(End)","Incorporating mindfulness into daily life does not require a significant time commitment. Simple practices such as taking a few minutes each day to focus on breathing, paying attention to the sensations of a daily activity, or engaging in a brief meditation can make a substantial difference. Mindfulness apps and guided meditation programs are widely available, making it easier than ever to begin and maintain a mindfulness practice. As more people embrace mindfulness, the collective .(End)","In addition to its mental health benefits, mindfulness has a positive impact on physical health. Regular mindfulness practice has been linked to lower blood pressure, improved sleep quality, and a stronger immune system. For example, mindful eating encourages individuals to pay attention to their hunger cues and savor each bite, leading to healthier eating habits and better digestion. Furthermore, mindfulness can enhance physical performance and recovery by promoting body awareness and reducing the risk of injury.(End)"]


    let random=""


    if(userRange == ""){
            
            error.innerText= `please define the length`
      }


     else{

         div.classList.add('paragraphs')

     for(let i =0 ; i<userRange ; i++){
             
       let randompara= Math.floor(Math.random() * para.length);
                
           random += `${para[randompara]} \n`;
    
        }
        
    }
    
    display.innerText=random

}
let liscence= document.getElementById('liscence')
let time = new Date()

liscence.innerText=`All Rights Reserved By Coding Army (Abdul Samad) ${time.getFullYear()}`