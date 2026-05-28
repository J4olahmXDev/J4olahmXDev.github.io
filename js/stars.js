(function(){
    const c=document.getElementById('starCanvas');
    if(!c)return;
    const ctx=c.getContext('2d');
    let W,H,stars=[];
    function resize(){W=c.width=window.innerWidth;H=c.height=window.innerHeight;}
    resize();window.addEventListener('resize',resize);
    for(let i=0;i<90;i++) stars.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,r:Math.random()*0.9+0.15,a:Math.random(),da:(Math.random()-0.5)*0.003,vx:(Math.random()-0.5)*0.025,vy:(Math.random()-0.5)*0.025});
    function draw(){
        ctx.clearRect(0,0,W,H);
        stars.forEach(s=>{
            s.a+=s.da; if(s.a<=0||s.a>=1)s.da*=-1;
            s.x+=s.vx;s.y+=s.vy;
            if(s.x<0)s.x=W;if(s.x>W)s.x=0;if(s.y<0)s.y=H;if(s.y>H)s.y=0;
            ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
            ctx.fillStyle=`rgba(232,212,178,${s.a*0.45})`;ctx.fill();
        });
        requestAnimationFrame(draw);
    }
    draw();
})();
