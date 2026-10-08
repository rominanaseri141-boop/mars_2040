const target=new Date("2040-07-20T09:00:00").getTime();const countdown=document.getElementById("countdown");
function updateCountdown(){if(!countdown)return;const d=target-Date.now();if(d<=0){countdown.textContent="مأموریت آغاز شده است 🚀";return}const days=Math.floor(d/86400000),hours=Math.floor(d/3600000)%24,minutes=Math.floor(d/60000)%60,seconds=Math.floor(d/1000)%60;countdown.textContent=`${days} روز، ${hours} ساعت، ${minutes} دقیقه و ${seconds} ثانیه تا آغاز مأموریت`;}
updateCountdown();setInterval(updateCountdown,1000);
const form=document.getElementById("joinForm"),message=document.getElementById("formMessage");
if(form)form.addEventListener("submit",e=>{e.preventDefault();message.textContent="درخواست شما با موفقیت ثبت شد. آماده باشید، فضانورد! 🚀";form.reset();});
