"use client";

import {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  MiniMap,
  Node,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useEffect } from 'react';

type RoleType = "Frontend" | "Backend" | "Designer";

interface RoadmapData {
  [key: string]: {
    nodes: Node[];
    edges: Edge[];
  };
}

const roadmapData: RoadmapData = {
  Frontend: {
    nodes: [
      // 메인 학습 경로
      {
        id: '1',
        type: 'default',
        position: { x: 100, y: 50 },
        data: { label: 'HTML 기본구조' },
        style: { background: '#7DD3FC', color: '#1E293B', border: '2px solid #0EA5E9', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '2',
        type: 'default',
        position: { x: 350, y: 50 },
        data: { label: 'CSS' },
        style: { background: '#7DD3FC', color: '#1E293B', border: '2px solid #0EA5E9', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '3',
        type: 'default',
        position: { x: 600, y: 50 },
        data: { label: 'VSCode' },
        style: { background: '#7DD3FC', color: '#1E293B', border: '2px solid #0EA5E9', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '4',
        type: 'default',
        position: { x: 850, y: 50 },
        data: { label: 'React' },
        style: { background: '#7DD3FC', color: '#1E293B', border: '2px solid #0EA5E9', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },

      // HTML 세부 항목
      {
        id: '5',
        type: 'default',
        position: { x: 50, y: 150 },
        data: { label: 'Semantic HTML' },
        style: { background: '#BFDBFE', color: '#1E293B', border: '1px solid #3B82F6', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '6',
        type: 'default',
        position: { x: 150, y: 150 },
        data: { label: 'Forms' },
        style: { background: '#BFDBFE', color: '#1E293B', border: '1px solid #3B82F6', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // CSS 세부 항목
      {
        id: '7',
        type: 'default',
        position: { x: 300, y: 150 },
        data: { label: 'Flexbox' },
        style: { background: '#BFDBFE', color: '#1E293B', border: '1px solid #3B82F6', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '8',
        type: 'default',
        position: { x: 400, y: 150 },
        data: { label: 'Grid' },
        style: { background: '#BFDBFE', color: '#1E293B', border: '1px solid #3B82F6', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '9',
        type: 'default',
        position: { x: 350, y: 220 },
        data: { label: 'Animation' },
        style: { background: '#BFDBFE', color: '#1E293B', border: '1px solid #3B82F6', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // VSCode 세부 항목
      {
        id: '10',
        type: 'default',
        position: { x: 550, y: 150 },
        data: { label: 'Extensions' },
        style: { background: '#BFDBFE', color: '#1E293B', border: '1px solid #3B82F6', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '11',
        type: 'default',
        position: { x: 650, y: 150 },
        data: { label: 'Shortcuts' },
        style: { background: '#BFDBFE', color: '#1E293B', border: '1px solid #3B82F6', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // React 세부 항목
      {
        id: '12',
        type: 'default',
        position: { x: 800, y: 150 },
        data: { label: 'API 연동' },
        style: { background: '#BFDBFE', color: '#1E293B', border: '1px solid #3B82F6', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '13',
        type: 'default',
        position: { x: 900, y: 150 },
        data: { label: 'Router' },
        style: { background: '#BFDBFE', color: '#1E293B', border: '1px solid #3B82F6', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '14',
        type: 'default',
        position: { x: 850, y: 220 },
        data: { label: 'Components' },
        style: { background: '#BFDBFE', color: '#1E293B', border: '1px solid #3B82F6', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // 추가 학습 항목들
      {
        id: '15',
        type: 'default',
        position: { x: 475, y: 300 },
        data: { label: 'Git' },
        style: { background: '#FDE047', color: '#1E293B', border: '2px solid #EAB308', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '16',
        type: 'default',
        position: { x: 650, y: 300 },
        data: { label: 'Deploy' },
        style: { background: '#FDE047', color: '#1E293B', border: '2px solid #EAB308', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '17',
        type: 'default',
        position: { x: 825, y: 300 },
        data: { label: 'Test' },
        style: { background: '#FDE047', color: '#1E293B', border: '2px solid #EAB308', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      }
    ],
    edges: [
      // 메인 경로 연결
      { id: 'e1-2', source: '1', target: '2', type: 'default', animated: true },
      { id: 'e2-3', source: '2', target: '3', type: 'default', animated: true },
      { id: 'e3-4', source: '3', target: '4', type: 'default', animated: true },

      // HTML 세부 연결
      { id: 'e1-5', source: '1', target: '5', type: 'default' },
      { id: 'e1-6', source: '1', target: '6', type: 'default' },

      // CSS 세부 연결
      { id: 'e2-7', source: '2', target: '7', type: 'default' },
      { id: 'e2-8', source: '2', target: '8', type: 'default' },
      { id: 'e2-9', source: '2', target: '9', type: 'default' },

      // VSCode 세부 연결
      { id: 'e3-10', source: '3', target: '10', type: 'default' },
      { id: 'e3-11', source: '3', target: '11', type: 'default' },

      // React 세부 연결
      { id: 'e4-12', source: '4', target: '12', type: 'default' },
      { id: 'e4-13', source: '4', target: '13', type: 'default' },
      { id: 'e4-14', source: '4', target: '14', type: 'default' },

      // 추가 학습 연결
      { id: 'e2-15', source: '2', target: '15', type: 'default' },
      { id: 'e15-16', source: '15', target: '16', type: 'default', animated: true },
      { id: 'e16-17', source: '16', target: '17', type: 'default', animated: true }
    ]
  },

  Backend: {
    nodes: [
      // 메인 학습 경로
      {
        id: '1',
        type: 'default',
        position: { x: 100, y: 50 },
        data: { label: 'HTTP/REST' },
        style: { background: '#86EFAC', color: '#1E293B', border: '2px solid #10B981', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '2',
        type: 'default',
        position: { x: 350, y: 50 },
        data: { label: 'Spring Boot' },
        style: { background: '#86EFAC', color: '#1E293B', border: '2px solid #10B981', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '3',
        type: 'default',
        position: { x: 600, y: 50 },
        data: { label: 'JPA' },
        style: { background: '#86EFAC', color: '#1E293B', border: '2px solid #10B981', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '4',
        type: 'default',
        position: { x: 850, y: 50 },
        data: { label: 'Security' },
        style: { background: '#86EFAC', color: '#1E293B', border: '2px solid #10B981', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },

      // HTTP/REST 세부 항목
      {
        id: '5',
        type: 'default',
        position: { x: 50, y: 150 },
        data: { label: 'GET/POST' },
        style: { background: '#BBF7D0', color: '#1E293B', border: '1px solid #10B981', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '6',
        type: 'default',
        position: { x: 150, y: 150 },
        data: { label: 'Status Code' },
        style: { background: '#BBF7D0', color: '#1E293B', border: '1px solid #10B981', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // Spring Boot 세부 항목
      {
        id: '7',
        type: 'default',
        position: { x: 300, y: 150 },
        data: { label: 'Controller' },
        style: { background: '#BBF7D0', color: '#1E293B', border: '1px solid #10B981', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '8',
        type: 'default',
        position: { x: 400, y: 150 },
        data: { label: 'Service' },
        style: { background: '#BBF7D0', color: '#1E293B', border: '1px solid #10B981', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '9',
        type: 'default',
        position: { x: 350, y: 220 },
        data: { label: 'Repository' },
        style: { background: '#BBF7D0', color: '#1E293B', border: '1px solid #10B981', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // JPA 세부 항목
      {
        id: '10',
        type: 'default',
        position: { x: 550, y: 150 },
        data: { label: 'Entity' },
        style: { background: '#BBF7D0', color: '#1E293B', border: '1px solid #10B981', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '11',
        type: 'default',
        position: { x: 650, y: 150 },
        data: { label: 'Query' },
        style: { background: '#BBF7D0', color: '#1E293B', border: '1px solid #10B981', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // Security 세부 항목
      {
        id: '12',
        type: 'default',
        position: { x: 800, y: 150 },
        data: { label: 'JWT' },
        style: { background: '#BBF7D0', color: '#1E293B', border: '1px solid #10B981', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '13',
        type: 'default',
        position: { x: 900, y: 150 },
        data: { label: 'OAuth' },
        style: { background: '#BBF7D0', color: '#1E293B', border: '1px solid #10B981', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // 추가 학습 항목들
      {
        id: '14',
        type: 'default',
        position: { x: 250, y: 300 },
        data: { label: 'Exception' },
        style: { background: '#FDE047', color: '#1E293B', border: '2px solid #EAB308', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '15',
        type: 'default',
        position: { x: 475, y: 300 },
        data: { label: 'Git' },
        style: { background: '#FDE047', color: '#1E293B', border: '2px solid #EAB308', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '16',
        type: 'default',
        position: { x: 650, y: 300 },
        data: { label: 'Test' },
        style: { background: '#FDE047', color: '#1E293B', border: '2px solid #EAB308', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '17',
        type: 'default',
        position: { x: 825, y: 300 },
        data: { label: 'Swagger' },
        style: { background: '#FDE047', color: '#1E293B', border: '2px solid #EAB308', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      }
    ],
    edges: [
      // 메인 경로 연결
      { id: 'e1-2', source: '1', target: '2', type: 'default', animated: true },
      { id: 'e2-3', source: '2', target: '3', type: 'default', animated: true },
      { id: 'e3-4', source: '3', target: '4', type: 'default', animated: true },

      // HTTP/REST 세부 연결
      { id: 'e1-5', source: '1', target: '5', type: 'default' },
      { id: 'e1-6', source: '1', target: '6', type: 'default' },

      // Spring Boot 세부 연결
      { id: 'e2-7', source: '2', target: '7', type: 'default' },
      { id: 'e2-8', source: '2', target: '8', type: 'default' },
      { id: 'e2-9', source: '2', target: '9', type: 'default' },

      // JPA 세부 연결
      { id: 'e3-10', source: '3', target: '10', type: 'default' },
      { id: 'e3-11', source: '3', target: '11', type: 'default' },

      // Security 세부 연결
      { id: 'e4-12', source: '4', target: '12', type: 'default' },
      { id: 'e4-13', source: '4', target: '13', type: 'default' },

      // 추가 학습 연결
      { id: 'e2-14', source: '2', target: '14', type: 'default' },
      { id: 'e14-15', source: '14', target: '15', type: 'default', animated: true },
      { id: 'e15-16', source: '15', target: '16', type: 'default', animated: true },
      { id: 'e16-17', source: '16', target: '17', type: 'default', animated: true }
    ]
  },

  Designer: {
    nodes: [
      // 메인 학습 경로
      {
        id: '1',
        type: 'default',
        position: { x: 100, y: 50 },
        data: { label: 'Figma' },
        style: { background: '#F8BBD0', color: '#1E293B', border: '2px solid #E91E63', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '2',
        type: 'default',
        position: { x: 300, y: 50 },
        data: { label: 'UX Design' },
        style: { background: '#F8BBD0', color: '#1E293B', border: '2px solid #E91E63', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '3',
        type: 'default',
        position: { x: 500, y: 50 },
        data: { label: 'Wireframe' },
        style: { background: '#F8BBD0', color: '#1E293B', border: '2px solid #E91E63', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '4',
        type: 'default',
        position: { x: 700, y: 50 },
        data: { label: 'Interaction' },
        style: { background: '#F8BBD0', color: '#1E293B', border: '2px solid #E91E63', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '5',
        type: 'default',
        position: { x: 900, y: 50 },
        data: { label: 'UI Design' },
        style: { background: '#F8BBD0', color: '#1E293B', border: '2px solid #E91E63', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },

      // Figma 세부 항목
      {
        id: '6',
        type: 'default',
        position: { x: 50, y: 150 },
        data: { label: 'Components' },
        style: { background: '#FCE4EC', color: '#1E293B', border: '1px solid #E91E63', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '7',
        type: 'default',
        position: { x: 150, y: 150 },
        data: { label: 'Variants' },
        style: { background: '#FCE4EC', color: '#1E293B', border: '1px solid #E91E63', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // UX Design 세부 항목
      {
        id: '8',
        type: 'default',
        position: { x: 250, y: 150 },
        data: { label: 'User Research' },
        style: { background: '#FCE4EC', color: '#1E293B', border: '1px solid #E91E63', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '9',
        type: 'default',
        position: { x: 350, y: 150 },
        data: { label: 'Persona' },
        style: { background: '#FCE4EC', color: '#1E293B', border: '1px solid #E91E63', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // Wireframe 세부 항목
      {
        id: '10',
        type: 'default',
        position: { x: 450, y: 150 },
        data: { label: 'Layout' },
        style: { background: '#FCE4EC', color: '#1E293B', border: '1px solid #E91E63', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '11',
        type: 'default',
        position: { x: 550, y: 150 },
        data: { label: 'Information' },
        style: { background: '#FCE4EC', color: '#1E293B', border: '1px solid #E91E63', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // Interaction 세부 항목
      {
        id: '12',
        type: 'default',
        position: { x: 650, y: 150 },
        data: { label: 'Prototype' },
        style: { background: '#FCE4EC', color: '#1E293B', border: '1px solid #E91E63', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '13',
        type: 'default',
        position: { x: 750, y: 150 },
        data: { label: 'Animation' },
        style: { background: '#FCE4EC', color: '#1E293B', border: '1px solid #E91E63', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // UI Design 세부 항목
      {
        id: '14',
        type: 'default',
        position: { x: 850, y: 150 },
        data: { label: 'Typography' },
        style: { background: '#FCE4EC', color: '#1E293B', border: '1px solid #E91E63', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },
      {
        id: '15',
        type: 'default',
        position: { x: 950, y: 150 },
        data: { label: 'Color' },
        style: { background: '#FCE4EC', color: '#1E293B', border: '1px solid #E91E63', borderRadius: '20px', padding: '8px 16px', fontSize: '12px' }
      },

      // 추가 학습 항목들
      {
        id: '16',
        type: 'default',
        position: { x: 200, y: 250 },
        data: { label: 'Design System' },
        style: { background: '#FDE047', color: '#1E293B', border: '2px solid #EAB308', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '17',
        type: 'default',
        position: { x: 450, y: 250 },
        data: { label: 'WCAG' },
        style: { background: '#FDE047', color: '#1E293B', border: '2px solid #EAB308', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '18',
        type: 'default',
        position: { x: 650, y: 250 },
        data: { label: 'HTML/CSS' },
        style: { background: '#FDE047', color: '#1E293B', border: '2px solid #EAB308', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      },
      {
        id: '19',
        type: 'default',
        position: { x: 850, y: 250 },
        data: { label: 'Design Handoff' },
        style: { background: '#FDE047', color: '#1E293B', border: '2px solid #EAB308', borderRadius: '25px', padding: '12px 20px', fontWeight: 'bold', fontSize: '14px' }
      }
    ],
    edges: [
      // 메인 경로 연결
      { id: 'e1-2', source: '1', target: '2', type: 'default', animated: true },
      { id: 'e2-3', source: '2', target: '3', type: 'default', animated: true },
      { id: 'e3-4', source: '3', target: '4', type: 'default', animated: true },
      { id: 'e4-5', source: '4', target: '5', type: 'default', animated: true },

      // Figma 세부 연결
      { id: 'e1-6', source: '1', target: '6', type: 'default' },
      { id: 'e1-7', source: '1', target: '7', type: 'default' },

      // UX Design 세부 연결
      { id: 'e2-8', source: '2', target: '8', type: 'default' },
      { id: 'e2-9', source: '2', target: '9', type: 'default' },

      // Wireframe 세부 연결
      { id: 'e3-10', source: '3', target: '10', type: 'default' },
      { id: 'e3-11', source: '3', target: '11', type: 'default' },

      // Interaction 세부 연결
      { id: 'e4-12', source: '4', target: '12', type: 'default' },
      { id: 'e4-13', source: '4', target: '13', type: 'default' },

      // UI Design 세부 연결
      { id: 'e5-14', source: '5', target: '14', type: 'default' },
      { id: 'e5-15', source: '5', target: '15', type: 'default' },

      // 추가 학습 연결
      { id: 'e1-16', source: '1', target: '16', type: 'default' },
      { id: 'e16-17', source: '16', target: '17', type: 'default', animated: true },
      { id: 'e17-18', source: '17', target: '18', type: 'default', animated: true },
      { id: 'e18-19', source: '18', target: '19', type: 'default', animated: true }
    ]
  }
};

interface RoadmapChartProps {
  selectedRole: RoleType;
}

export default function RoadmapChart({ selectedRole }: RoadmapChartProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(roadmapData[selectedRole].nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(roadmapData[selectedRole].edges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  useEffect(() => {
    setNodes(roadmapData[selectedRole].nodes);
    setEdges(roadmapData[selectedRole].edges);
  }, [selectedRole, setNodes, setEdges]);

  return (
    <div className="w-full h-[600px] border border-gray-200 rounded-lg bg-gray-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Controls />
        <MiniMap
          nodeStrokeColor="#374151"
          nodeColor="#9CA3AF"
          nodeBorderRadius={2}
          maskColor="rgba(0, 0, 0, 0.2)"
        />
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="#4B5563"
        />
      </ReactFlow>
    </div>
  );
}