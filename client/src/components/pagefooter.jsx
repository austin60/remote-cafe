import {MdOutlineCopyright} from "react-icons/md";
const PageFooter=()=>{
 return(
    <div className="page-footer">
       <div className="copyrights"><MdOutlineCopyright/>copyright 2023</div>
       <div className="company">remote cafe</div>
       <div className="creator">by <a href="https://github.com/austin60/remote-cafe">austineokongo</a></div>
    </div>
 )
}

export default PageFooter;