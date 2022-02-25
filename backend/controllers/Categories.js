import Categories from "../models/CategoryModel.js";

// mengambil semua data categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// mengambil data category dengan ID tertentu
export const getCategoryById = async (req, res) => {
  try {
    const category = await Categories.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(category[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// membuat data category yang baru
export const createCategory = async (req, res) => {
  try {
    await Categories.create(req.body);
    res.json({
      message: "Category Created"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// mengubah data category
export const updateCategory = async (req, res) => {
  try {
    await Categories.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json({
      message: "Category Updated"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// menghapus data category
export const deleteCategory = async (req, res) => {
  try {
    await Categories.destroy(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json({
      message: "Category Deleted"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
