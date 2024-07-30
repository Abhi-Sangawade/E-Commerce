const orderService=require("../services/orderService.js");

const getAllOrders=async(req,res)=>{
    try{
        const orders = await orderService.getAllOrders();
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
    }
}

const confirmedOrders=async(req,res)=>{
    const orderId = req.params.orderId;
    try{
        const orders = await orederService.confirmedOrders();
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
    }
}

const shippOrders=async(req,res)=>{
    const orderId = req.params.orderId;
    try{
        const orders = await orederService.shippOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
    }
}

const deliverOrders=async(req,res)=>{
    const orderId = req.params.orderId;
    try{
        const orders = await orederService.deliverOrders();
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
    }
}

const cancelledOrders=async(req,res)=>{
    const orderId = req.params.orderId;
    try{
        const orders = await orederService.cancelledOrders(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
    }
}

const deleteOrders=async(req,res)=>{
    const orderId = req.params.orderId;
    try{
        const orders = await orederService.deleteOrders(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
    }
}

module.exports={
        getAllOrders,
        confirmedOrders,
        shippOrders,
        deliverOrders,
        cancelledOrders,
        deleteOrders
}
