const express = require("express");
let router = express.Router();
let Invoice = require("../models/Invoice");

router.get("/invoice", async (req, res) => {
  try {
    let data = await Invoice.findAll();
    if (data) {
      res.json({
        status: 200,
        message: "All invoices",
        data: data,
      });
    }
  } catch (error) {
    res.json({
      status: 404,
      message: "Error returning invoices",
      error: error,
    });
  }
});

router.get("/invoice/:id", async (req, res) => {
  try {
    let data = await Invoice.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (data) {
      res.json({
        status: 200,
        message: "Invoice returned",
        data: data,
      });
    }
  } catch (error) {
    res.json({
      status: 404,
      message: "Error returning invoices",
      error: error,
    });
  }
});

router.post("/invoice", async (req, res) => {
  try {
    let data = await Invoice.create(req.body);
    if (data) {
      res.json({
        status: 200,
        message: "Created Invoice",
      });
    }
  } catch (error) {
    res.json({
      status: 404,
      message: "error",
      error: error,
    });
  }
});

router.put("/invoice/:id", (req, res) => {
  Invoice.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      // console.log('user created!');
      res.json({
        status: 200,
        message: "Invoice details updated",
      });
    })
    .catch((err) =>
      res.json({
        code: 400,
        message: "Invoice details could not be updated",
      })
    );
});

router.delete("/invoice/:id", (req, res) => {
  Invoice.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      // console.log('user created!');
      res.json({
        status: 200,
        message: "Invoice details deleted",
      });
    })
    .catch((err) =>
      res.json({
        code: 400,
        message: "Invoice could not be deleted",
        err: err,
      })
    );
});

module.exports = router;
