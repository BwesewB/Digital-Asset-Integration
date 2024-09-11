import Image from "../Atoms/Image";
import SubText from "../Atoms/Subtext";
import Title from "../Atoms/Title";

export default function post({ imageURL, titleText, subtext}){

    return(
        <div
            style={{
                width:"40%",
                display:"flex",
                flexDirection:"row",
                gap:"5%"
            }}
        >
            <Image imageURL={imageURL}/>
            <div>
                <Title titleText={titleText}/>
                <SubText subtext={subtext}/>
            </div>
        </div>
    )
}