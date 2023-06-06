const DashboardSchema = require('../Models/DashBoardSchema');
exports.DashboardController = async (req,res) => {
try {
    const {vehicleType,Area,OffenceDetails} = req.body;
    if(!vehicleType){
        res.status(404).json({
            Error:` vehicleType Missing`
        })
    }

    if(!Area){
        res.status(404).json({
            Error:`Area Missing`
        })
    }
    if(!OffenceDetails){
        res.status(404).json({
            Error:`OffenceDetails Missing`
        })
    }

    const data = await new DashboardSchema({
        vehicleType,
        Area,
        OffenceDetails 
    }).save();
    res.status(200).json({
        message:`Sucessfully Data send to Database : ${data}`
    })
} catch (error) {
    res.status(404).json({
        Error:`Error from Dashboard ${error}`
    })
}
}