import React from 'react';
import './Calc.css';

class Calc extends React.Component
{   
    
    constructor(props)
    {
        super(props);
        this.state={
            num:'',
            operation:'',
            num1:'',     
            dnum:''       

        }
        this.one=this.one.bind(this)
        this.two=this.two.bind(this)
        this.three=this.three.bind(this)
        this.four=this.four.bind(this)
        this.five=this.five.bind(this)
        this.six=this.six.bind(this)
        this.seven=this.seven.bind(this)
        this.eight=this.eight.bind(this)
        this.nine=this.nine.bind(this)
        this.zero=this.zero.bind(this)
        this.dot=this.dot.bind(this)
        this.add=this.add.bind(this)
        this.equal=this.equal.bind(this)
        this.clear=this.clear.bind(this)
        this.sub=this.sub.bind(this)
        this.mult=this.mult.bind(this)
        this.div=this.div.bind(this)
    }
  
    one()
    {   this.setState({dnum:this.state.num+1})
        this.setState({num:this.state.num+1})
                
    }
    two()
    {   this.setState({dnum:this.state.num+2})
        this.setState({num:this.state.num+2})
       
    }
    three()
    {   this.setState({dnum:this.state.num+3})
        this.setState({num:this.state.num+3})
    }
    four()
    {   this.setState({dnum:this.state.num+4})
        this.setState({num:this.state.num+4})
    }
    five()
    {   this.setState({dnum:this.state.num+5})
        this.setState({num:this.state.num+5})
    }
    six()
    {   this.setState({dnum:this.state.num+6})
        this.setState({num:this.state.num+6})
    }
    seven()
    {   this.setState({dnum:this.state.num+7})
        this.setState({num:this.state.num+7})
    }
    eight()
    {   this.setState({dnum:this.state.num+8})
        this.setState({num:this.state.num+8})
    }
    nine()
    {   this.setState({dnum:this.state.num+9})
        this.setState({num:this.state.num+9})
    }
    zero()
    {   this.setState({dnum:this.state.num+0})
        this.setState({num:this.state.num+0})
    }
    dot()
    {
        this.setState({dnum:this.state.num+'.'})
        this.setState({num:this.state.num+'.'})
    }
    add()
    {   this.setState({num1:this.state.dnum})
        this.setState({num:''})
        this.setState({operation:Number(this.state.operation)+1})
    }
    sub()
    {   this.setState({num1:this.state.dnum})
        this.setState({num:''})
        this.setState({operation:Number(this.state.operation)+2})
    }
    mult()
    {   this.setState({num1:this.state.dnum})
        this.setState({num:''})
        this.setState({operation:Number(this.state.operation)+3})
    }
    div()
    {   this.setState({num1:this.state.dnum})
        this.setState({num:''})
        this.setState({operation:Number(this.state.operation)+4})
    }
    equal()
    {
        if(this.state.operation===1)
        {
            this.setState({dnum:Number(this.state.num1)+Number(this.state.dnum)})
            // this.setState({num:this.state.dnum})
            this.setState({operation:''})
        }
        if(this.state.operation===2)
        {
            this.setState({dnum:Number(this.state.num1)-Number(this.state.dnum)})
            // this.setState({num:this.state.dnum})
            this.setState({operation:''})
        }
        if(this.state.operation===3)
        {
            this.setState({dnum:Number(this.state.num1)*Number(this.state.dnum)})
            // this.setState({num:this.state.dnum})
            this.setState({operation:''})
        }
        
        if(this.state.operation===4)
        {
            this.setState({dnum:Number(this.state.num1)/Number(this.state.dnum)})
            // this.setState({num:this.state.dnum})
            this.setState({operation:''})
        }
        
        
    }
    clear()
    {
        this.setState({num:'',dnum:'',num1:'',operation:''})
    }


    render()
    {
        return (

            <div className="Calc" id="firstdiv">
      <header className="Calc-header">     
    
      <h1>CALCULATOR</h1>   
      </header>
      <br></br>
            <div id="calcbody">
            <input type="text" id="displaybox" value={this.state.dnum} readOnly ></input>
            <button id="btn_clr" onClick={this.clear}>Clear</button><br/>
            <table>
                <tr>
                    <td>
                    <button style={{inlineSize:"3cm"}} id="one" onClick={this.one}><b>1</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}} id="two"onClick={this.two}><b>2</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}} id="three"onClick={this.three}><b>3</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}} id="add"onClick={this.add}><b>+</b></button>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="four"onClick={this.four}><b>4</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="five"onClick={this.five}><b>5</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="six"onClick={this.six}><b>6</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="subt"onClick={this.sub}><b>-</b></button>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="seven"onClick={this.seven}><b>7</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="eight"onClick={this.eight}><b>8</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="nine"onClick={this.nine}><b>9</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="mult"onClick={this.mult}><b>*</b></button>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="deci"onClick={this.dot}><b>.</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="zero"onClick={this.zero}><b>0</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="equal" onClick={this.equal}><b>=</b></button>
                    </td>
                    <td>
                    <button style={{inlineSize:"3cm"}}id="div"onClick={this.div}><b>/</b></button>
                    </td>
                </tr>
            </table>
            </div>
            </div>
        )
    }
}
export default Calc;