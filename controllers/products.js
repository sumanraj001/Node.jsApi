const getAllProducts=async (req,res)=>{
    res.status(200).json({msg:" i am from getAllProducts"});
};

const getAllProductstesting=async (req,res)=>{
    res.status(200).json({msg:" i am from getAllProductstesting"});
};

module.exports={getAllProducts,getAllProductstesting};