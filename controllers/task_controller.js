import express from 'express';
import Task from '../models/task.js';

export const getAllTask = async (req, res) => {
   try {
      const tasks = await Task.find({});
      if (!tasks) {
         return res.status(404).json({ msg: 'task not found' });
      }
      res.status(200).json({ tasks });
   } catch (error) {
      res.status(500).json({ msg: error });
   }
};

export const createTask = async (req, res) => {
   try {
      const task = await Task.create(req.body);
      if (!task) {
         return res.status(404).json({ msg: 'Enter a task' });
      }
      res.status(201).json({ task });
   } catch (error) {
      res.status(500).json({ msg: error });
   }
};

export const getTask = async (req, res) => {
   try {
      const { id } = await req.params;
      const task = await Task.findOne({ _id: id });
      if (!task) {
         return res.status(404).json({ msg: 'task not exist' });
      }
      res.status(200).json({ task });
   } catch (error) {
      res.status(500).json({ msg: error });
   }
};

export const updateTask = async (req, res) => {
   try {
      const { id } = await req.params;
      const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
         new: true,
         runValidators: true,
      });
      if (!task) {
         return res.status(404).json({ msg: 'task not exist' });
      }
      res.status(200).json({ msg: 'task updated successfull !', task });
   } catch (error) {
      res.status(500).json({ msg: error });
   }
};

export const deleteTask = async (req, res) => {
   try {
      const { id } = await req.params;
      const task = await Task.findByIdAndDelete({ _id: id });
      if (!task) {
         return res.status(404).json({ msg: 'task not exist' });
      }
      res.status(200).json({ msg: 'task delete successfull !' });
   } catch (error) {
      res.status(500).json({ msg: error });
   }
};
