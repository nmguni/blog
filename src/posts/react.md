---
title: "react"
date: "2020-1-5"
---

```javascript
var s = "JavaScript syntax highlighting";
alert(s);


const BlogPost = props => {
  return (
    <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    </div>
    )
}


// class component

class BlogPost extends Component {
  render() {
    return (
   <h1>{this.props.title}</h1>
    <p>{this.props.description}</p>
    </div>
      )
  }
}
```
