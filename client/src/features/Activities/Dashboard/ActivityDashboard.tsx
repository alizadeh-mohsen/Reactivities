import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../Details/ActivityDetails";
import ActivityForm from "../From/ActivityForm";

type Props = {
    activities: Activity[],
    selectActivity: (id: string) => void,
    cancelSelectActivity: () => void,
    selectedActivity: Activity | undefined,
    OpenForm: (id?: string) => void,
    editMode: boolean,
    closeForm: () => void,
}

export default function ActivityDashboard({ 
    activities, selectActivity,cancelSelectActivity,selectedActivity,
    OpenForm,editMode,closeForm
 }: Props) {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={7}>
                <ActivityList 
                activities={activities} 
                selectActivity={selectActivity}
                
                />
            </Grid2>
            <Grid2 size={5}>
               { selectedActivity && !editMode && <ActivityDetail  openForm={OpenForm}
               activity={selectedActivity} 
               cancelSelectActivity={cancelSelectActivity} />}
               {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity}/>}
            </Grid2>
        </Grid2>
    )
}
