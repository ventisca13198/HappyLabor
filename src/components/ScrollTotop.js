import React, { Component } from "react";
import { FiChevronUp } from "react-icons/fi";
import { Row } from "react-bootstrap";
export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div
        className="scroll-to-top "
        
      >
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <Row style={{ justifyContent: "center" }} style={{ backgroundColor: "rgba(128,128,128,0.5)" }}>
              <FiChevronUp size={32} />
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <span>TOP</span>
            </Row>
          </div>
        )}
      </div>
    );
  }
}
