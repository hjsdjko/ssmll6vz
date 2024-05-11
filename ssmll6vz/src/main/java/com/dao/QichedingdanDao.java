package com.dao;

import com.entity.QichedingdanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.QichedingdanVO;
import com.entity.view.QichedingdanView;


/**
 * 汽车订单
 * 
 * @author 
 * @email 
 * @date 2021-06-08 10:11:38
 */
public interface QichedingdanDao extends BaseMapper<QichedingdanEntity> {
	
	List<QichedingdanVO> selectListVO(@Param("ew") Wrapper<QichedingdanEntity> wrapper);
	
	QichedingdanVO selectVO(@Param("ew") Wrapper<QichedingdanEntity> wrapper);
	
	List<QichedingdanView> selectListView(@Param("ew") Wrapper<QichedingdanEntity> wrapper);

	List<QichedingdanView> selectListView(Pagination page,@Param("ew") Wrapper<QichedingdanEntity> wrapper);
	
	QichedingdanView selectView(@Param("ew") Wrapper<QichedingdanEntity> wrapper);
	
}
