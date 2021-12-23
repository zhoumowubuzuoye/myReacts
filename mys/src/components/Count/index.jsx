import React, { Component } from "react";

function Demo() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log(111);
  }, []);
  return <Father />;
}

class Father extends Component {
  state = {
    car: {
      name: "老破车",
      money: "白送都没有人要",
    },
  };
  changeCar = () => {
      this.setState({
          car:{name:'老牛逼的车',money:'小兔崽子你这这辈子都买不起'}
      })
  };
  render() {
    return (
      <div>
        <div>father</div>
        我的车市{this.state.car.name}
        {this.state.car.money}{" "}
        <button onClick={this.changeCar}>点击换车</button>
        <Son car={this.state.car} />
      </div>
    );
  }
}
class Son extends Component {
  render() {
    const { car } = this.props;
    return <div>我从老父亲哪里继承的一辆{car.name}</div>;
  }
}
export default Demo;
