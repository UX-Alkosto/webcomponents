import { css } from 'lit';

const styles = css`:host{
    background-color: var(--k-card-background-color, #fff);
    border-radius: var(--k-card-border-radius, 4px);
    display: inline-block;
    margin: .5em;
    max-width: 100%;
    padding: 0;
    position:relative;
    transition: ease-in-out .3s all;
    width: auto;    
}
:host([href]) {
    cursor: pointer;
}
:host([shadow]) {
    box-shadow: 0 2px 3px 2px rgba(0,0,0,.1);
}
:host([shadow]:hover),
:host([shadow]:focus){
    box-shadow: 0 2px 5px 2px rgba(0,0,0,.2);
}
::slotted(k-button){ 
    z-index: 1;
    min-width: 180px;
    border: 4px solid white;     
    position: absolute;
    right: 2em;
    top: 164px;
} 
::slotted(img){    
    border-radius: var(--button-radius,4px) var(--button-radius,4px) 0 0;
    height: 191px;
    object-fit:cover;
    width:100%;
}
.text{
    padding: 0 1.75em 1.75em 1.75em;	
}

::slotted(span){
    color: var(--primary-color1,#F9C332);
    font-size: 13px;
    font-weight: bold;
    line-height: 17px;
}
::slotted(h2){
    max-width: 380px;
    color: var(--text-color1,#010000);
    font-size: 20px;
    font-weight: bold;
    line-height: 26px;
}

::slotted(p){		
    overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 4;
   -webkit-box-orient: vertical;
     color: #373435;
     font-size: 13px;
     font-weight: medium;
     line-height: 17px;
 }
::slotted(.author_date){
    color: #959595;
    font-size: 12px;
    font-weight: medium;
    line-height: 17px;
    text-align: right;
    margin-bottom: 0;
}

@media screen and (min-width: 768px) {
    ::slotted(p) {
        display: block;
    }
}`;

export { styles };