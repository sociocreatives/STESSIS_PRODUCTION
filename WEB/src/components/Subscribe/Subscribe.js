import React from "react";
import { Container } from "../../globalStyles";
import { Section, Mainbody, Contents, Header } from "./SubscribeElements";

function Subscribe() {
  return (
    <Section>
      <Container>
        <Contents>
          <Header>
            <h3>Become a Member</h3>
            <p>
              We take privacy seriously and we will never spam or sell your
              information.
            </p>
          </Header>
          <Mainbody>
            <form>
              <input type="text" placeholder="Your Email Address" />
              <input type="submit" value="Submit" className="submit" />
            </form>
          </Mainbody>
        </Contents>
      </Container>
    </Section>
  );
}

export default Subscribe;

// import React from "react";
// import { Container } from "../../globalStyles";
// import { Section, Mainbody, Contents, Header } from "./SubscribeElements";

// function Subscribe() {
//   return;
//   <Section>
//     <Container>
//       <Contents>
//         <Header>
//           <h3>Become a Member</h3>
//           <p>
//             We take privacy seriously and we will never spam or sell your
//             information.
//           </p>
//         </Header>
//         <Mainbody>
//           <form>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 value={this.state.value}
//                 onChange={this.handleChange}
//               />
//             </label>
//             <input type="submit" value="Submit" />
//           </form>
//         </Mainbody>
//       </Contents>
//     </Container>
//   </Section>;
// }

// export default Subscribe;
