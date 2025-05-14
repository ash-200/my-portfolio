
  var programsflip = new Array(50).fill(0);
  var imgadd = [];

  function play() {
    new Audio("intro.mp3").play();
    document.getElementById("ashish").classList.add("animate-scale");
    setTimeout(() => window.location.replace("portfolio.html"), 3000);
  }

 

  function anima(t, n, v, d,url) {
 console.log("hi");

    
    if (programsflip[d] === 0) {
      imgadd[d] = url;
    t.innerHTML = `
      <div class="relative size-30 mr-3 animate-flip delay-2000" onclick="anima(this,${n},${v} ${d},${url})">
        <svg class="rotate-[135deg] size-full" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-sky-400" stroke-width="1" stroke-dasharray="100 100" stroke-linecap="round"></circle>
          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-sky-900" stroke-width="2" stroke-dasharray="${v} 100" stroke-linecap="round"></circle>
        </svg>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span class="text-xl md:text-4xl font-bold text-sky-600">${v}</span>
          <span class="text-sky-600 block -top-1">${n}</span>
        </div>
      </div>
    `;
   
    programsflip[d] = 1;
    }
    else {
      
     t.innerHTML =  `<img src="${imgadd[d]}" class="w-full h-full object-contain animate-flip">`;
      programsflip[d] = 0;
    }
  }




   document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("animated-line");

    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            target.classList.add("animate-draw");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(target);
      });
let cardno='0'
function opencard(id)
{
  cardno=id;
  console.log("exinfocard"+id)
  let v=document.getElementById("exinfocard"+id);
  document.getElementById("exbar").classList.add('hidden');
  v.classList.remove('hidden');
  //document.getElementById("excard").remove('hidden');
  
}
function closecard()
{
  console.log("exinfocard"+cardno)
  //document.getElementById("expcard").classList.add('hidden');
  document.getElementById("exinfocard"+cardno).classList.add("hidden");
 document.getElementById("exbar").classList.remove('hidden');
}
var p1='0';
function viewp1(current)
{
  if(p1==0){
  current.innerHTML=`  <div class="absolute inset-0 bg-black bg-opacity-70 rounded-3xl flex flex-col justify-center items-center 
  p-4 sm:p-6 md:p-10 text-center max-w-full sm:max-w-lg mx-auto">

  <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Park and Go</h2>

  <p class="text-xs sm:text-sm md:text-base mb-3 italic">
    Smart Parking Management System
  </p>

  <ul class="text-xs sm:text-sm md:text-base mb-4 space-y-1">
    <li>• Contactless QR Entry/Exit</li>
    <li>• Live Slot Tracking & Pre-Booking</li>
    <li>• Razorpay Payment Integration</li>
    <li>• Real-time Updates & Notifications</li>
  </ul>

  <div class="text-xs text-gray-300 mb-4">
    <span class="block font-medium">Technologies:</span>
    <span>Java, XML, Android SDK, QR API, Razorpay</span>
  </div>

  <a href="#parkandgo-details"
     class="bg-sky-700 hover:bg-sky-600 text-white font-semibold px-4 py-2 rounded-lg transition">
    View Project
  </a>
</div>


`;
  p1=1;
  }
  else{
    // console.log("h");
    p1=0;
    current.innerHTML=` `;
  }
}

var p2='0';
function viewp2(current)
{
  if(p2==0){
  current.innerHTML=`  <div class="absolute inset-0 bg-black bg-opacity-70 rounded-3xl flex flex-col justify-center items-center 
  p-4 sm:p-6 md:p-10 text-center max-w-full sm:max-w-lg mx-auto">

  <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Your Mart</h2>

  <p class="text-xs sm:text-sm md:text-base mb-3 italic">
    E-commerce Grocery Shopping Platform
  </p>

  <ul class="text-xs sm:text-sm md:text-base mb-4 space-y-1">
    <li>• Real-time Cart & User Profiles</li>
    <li>• Razorpay & COD Payment Integration</li>
    <li>• Single Page UI for smooth experience</li>
    <li>• Built with Angular & Firebase</li>
  </ul>

  <div class="text-xs text-gray-300 mb-4">
    <span class="block font-medium">Technologies:</span>
    <span>Angular, Firebase, Razorpay API</span>
  </div>

  <a href="#yourmart-details"
     class="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg transition">
    View Project
  </a>
</div>

`;
  p2=1;
  }
  else{
    //console.log("h");
    p2=0;
    current.innerHTML=` `;
  }
}

var p3='0';
function viewp3(current)
{
  if(p3==0){
  current.innerHTML=`  <div class="absolute inset-0 bg-black bg-opacity-70 rounded-4xl flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 text-center">
  <h2 class="text-base sm:text-lg md:text-2xl font-bold mb-2">Leave Application System</h2>

  <p class="text-xs sm:text-sm md:text-base mb-3 italic">Web-based Leave Management Workflow</p>

  <ul class="text-xs sm:text-sm md:text-base mb-4 space-y-1">
    <li>• Auto & Manager Approval Process</li>
    <li>• Real-time Leave Status Updates</li>
    <li>• Streamlined User Flow</li>
    <li>• Built with IBM BPM & JavaScript</li>
  </ul>

  <div class="text-[10px] sm:text-xs text-gray-300 mb-4">
    <span class="block font-medium">Technologies:</span>
    <span>IBM BPM, JavaScript, HTML, CSS</span>
  </div>

  <a href="#leaveproject-details" class="bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-lg transition text-xs sm:text-sm md:text-base">
    View Project
  </a>
</div>


`;
  p3=1;
  }
  else{
    //console.log("h");
    p3=0;
    current.innerHTML=` `;
  }
}


function sendmsg()
{
  var sender="ashishk200088@gmail.com";
  console.log(sender);
Email.send({
                Host: "smtp.gmail.com",
                Username: "ashishm200088@gmail.com",
                Password: "Manjula@1976",
                To: "ashishk200088@gmail.com",
                From: "ashishm200088@gmail.com",
                Subject: "Test Email",
                Body: "This is a test email sent using SMTP.js"
            })
            .then(function (message) {
                alert("Mail sent successfully") // Alert message on successful email delivery
            });
}