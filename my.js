let a=parseInt(prompt('Nhap vao a'));
let b=parseInt(prompt('Nhap vao b'));
let c=parseInt(prompt('Nhap vao c'));
let delta=(b*b)-(4*a*c);
let sqrt_delta=Math.sqrt(delta);
if(a==0){
    alert('Phuong trinh khong phai phuong trinh bac 2');
    } else if(delta<0){
            alert('Phuong trinh vo nghiem')
        }else if (delta=0){
            alert('Phuong trinh co nghiem kep = '+(-b/(2*a)));
        }else {
            let nghiem1 = (-b+sqrt_delta)/(2*a);
            let nghiem2 = (-b-2)/(2*a);
            alert('Phuong trinh co 2 nghiem phan biet.' + 'Nghiem 1 = ' + nghiem1 +'. Nghiem 2 = '+ nghiem2);
        }
