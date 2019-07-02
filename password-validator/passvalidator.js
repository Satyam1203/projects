    let c=0,u=0,l=0,n=0,res="";
        let validate=()=>{
            let a= document.getElementById("pass").value;
            for(let i=0;i<a.length;i++){
                if(a.charCodeAt(i)>=65 && a.charCodeAt(i)<=90)
                    u++;
                else if(a.charCodeAt(i)>=97 && a.charCodeAt(i)<=122)
                    l++;
                else if(a.charCodeAt(i)>=48 && a.charCodeAt(i)<=57)
                    n++;
                else
                    c++;
            }
            if(u>0 && l>0 && n>0 && c>0 && u+l+n+c>=8)
                res=res+("<h1 align=center><font color=#467>Congratulations!!</font></h1>"+
                         "<p align=center><font color=#fff>You have a Strong password<font></p>");
            else
                res=res+("<h1 align=center><font color=#467>You must select a strong password</font></h1>"+
                                "<div align=left><font color=#fff>It must contain atleast: <ul>"+
                                            "<li>One Uppercase letter</li>"+
                                            "<li>One Lowercase letter</li>"+
                                            "<li>One digit</li>"+
                                            "<li>One Special Symbol</li>"+
                                            "<li>Total of 8 characters.</li>"+
                                            "</ul></font></div>");
        document.getElementById("form").style.display="none";
        document.getElementById("result").style.display="block";
        document.getElementById("result").innerHTML=res;
        };

