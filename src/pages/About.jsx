
import '../styles/toggle.css'
export default function About() {

  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox"/>
        <label htmlFor="checkbox" className="label">
          {/* rome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <i className="fas fa-moon"></i>
          {/* rome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <i className="fas fa-sun"></i>
          {/* rome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="ball"></div>
        </label>
    </div>
  )
}
