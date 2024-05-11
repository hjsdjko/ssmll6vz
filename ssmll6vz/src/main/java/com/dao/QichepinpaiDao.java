package com.dao;

import com.entity.QichepinpaiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.QichepinpaiVO;
import com.entity.view.QichepinpaiView;


/**
 * 汽车品牌
 * 
 * @author 
 * @email 
 * @date 2021-06-08 10:11:38
 */
public interface QichepinpaiDao extends BaseMapper<QichepinpaiEntity> {
	
	List<QichepinpaiVO> selectListVO(@Param("ew") Wrapper<QichepinpaiEntity> wrapper);
	
	QichepinpaiVO selectVO(@Param("ew") Wrapper<QichepinpaiEntity> wrapper);
	
	List<QichepinpaiView> selectListView(@Param("ew") Wrapper<QichepinpaiEntity> wrapper);

	List<QichepinpaiView> selectListView(Pagination page,@Param("ew") Wrapper<QichepinpaiEntity> wrapper);
	
	QichepinpaiView selectView(@Param("ew") Wrapper<QichepinpaiEntity> wrapper);
	
}
