import { YOUR_MIND } from "../utils/contants";
import { Link } from "react-router";


const YourMind = ({ yourdata }) => {
    // Function to extract collection_id and tags from entityId
    const extractParams = (entityId) => {
        const queryString = entityId.split("?")[1]; // Get the part after '?'
        const params = new URLSearchParams(queryString);
        return `${params.get("collection_id")}&tags=${params.get("tags")}`;
    };

    // Extract the required part from entityId
    const extractedData = extractParams(yourdata.entityId);

    return (
        <div className="min-w-[50px] sm:min-w-[150px] md:min-w-[125px] p-2">
            <Link to={`/yourMindRestaurant/${encodeURIComponent(extractedData)}`}>
                <img
                    src={YOUR_MIND + yourdata.imageId}
                    alt="your-mind-banner"
                    className="cursor-pointer"
                />
            </Link>
        </div>
    );
};

export default YourMind;
